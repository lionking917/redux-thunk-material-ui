import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 500,
    marginTop: 30
  },
  about: {
    fontSize: 20
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container className={classes.container}>
        <Typography variant="h6" className={classes.about}>
          While watching our favorite teams and players battling against each other is certainly entertaining, we were not satisfied with simply watching and cheering from the sidelines.
          So rather than merely filling the role of a passive spectator, we were compelled to create a gamified form of active participation that would enable us to vicariously partake and to feel immersed in the battles and matchups taking place before us.
        </Typography>
      </Container>
    </Layout>
  )
}

export default About;