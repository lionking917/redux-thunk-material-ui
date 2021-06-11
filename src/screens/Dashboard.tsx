import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress, Checkbox, Button } from '@material-ui/core';
import { DataGrid, GridColDef, GridApi, GridCellValue, GridCellParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/Layout";
import { RootStore } from "../Store";
import { GetMockies } from "../actions/MockyActions";
import { MockyType } from '../actions/MockyActionTypes';
import { AddEntry, RemoveEntry } from "../actions/EntryActions";
import { EntryType } from '../actions/EntryActionTypes';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 500
  },
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  const mockyState = useSelector((state: RootStore) => state.mocky);
  const entryState = useSelector((state: RootStore) => state.entry);
  const classes = useStyles();
  const [rows, setRows] = useState<any[]>([]);
  const [btnNames, setBtnNames] = useState<string[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'name', headerName: 'Name', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'live', headerName: 'Live', width: 120 },
    { field: 'matchSeries', headerName: 'Match Series', width: 120 },
    { field: 'tournamentName', headerName: 'Tournament Name', width: 120 },
    { field: 'winningsPrizePoolAmount', headerName: 'Winnings Prize Pool Amount', width: 120 },
    { field: 'bonusPrizePoolAmount', headerName: 'Bonus Prize Pool Amount', width: 120 },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      width: 210,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Button color="primary" onClick={() => onClick(params)}>
            {
              btnNames[params.id as number - 1] ? btnNames[params.id as number - 1] : 'Add to Entries'
            }
          </Button>
        );
      }
    }
  ];

  const onClick = (params: GridCellParams) => {
    const api: GridApi = params.api;
    const fields = api
      .getAllColumns()
      .map((c) => c.field)
      .filter((c) => c !== "__check__" && !!c);
    const thisRow: Record<string, GridCellValue> = {};
    
    fields.forEach((f) => {
      thisRow[f] = params.getValue(params.id, f);
    });

    const index = entryState.entries.findIndex((entry: EntryType) => entry.id === thisRow.id);
    const tmpBtnNames = btnNames;
    if (index === -1) {
      tmpBtnNames[thisRow.id as number - 1] = 'Remove from Entries';
      dispatch(AddEntry(thisRow as EntryType));
    } else {
      tmpBtnNames[thisRow.id as number - 1] = 'Add to Entries';
      dispatch(RemoveEntry(thisRow.id as number));
    }

    setBtnNames(tmpBtnNames);
  };

  useEffect(() => {
    dispatch(GetMockies());
  }, []);

  useEffect(() => {
    const tmpRows: any[] = [];
    if (mockyState.mockies.length > 0) {
      mockyState.mockies.forEach((mocky: MockyType, index: number) => {
        tmpRows.push({
          id: index + 1,
          name: mocky.name,
          status: mocky.eventStatus,
          live: new Date(mocky.goLiveAt).toDateString(),
          matchSeries: mocky.matchSeries,
          tournamentName: mocky.tournament.name,
          winningsPrizePoolAmount: mocky.prizePools.winningsPrizePoolAmount,
          bonusPrizePoolAmount: mocky.prizePools.bonusPrizePoolAmount,
        });
      });
      setRows(tmpRows);
    }
  }, [mockyState.mockies])

  return (
    <Layout>
      <Container className={classes.container}>
        {mockyState.loading && <div className={classes.progress}><CircularProgress /></div>}
        {rows.length > 0 && (
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid 
              rows={rows} 
              columns={columns} 
              pageSize={10} 
              checkboxSelection 
              disableSelectionOnClick
              onSelectionModelChange={(selection) => {console.log(selection)}}
              
            />
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default Dashboard;