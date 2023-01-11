import { useTheme } from '@emotion/react';
import { Container, Grid } from '@mui/material';
import { m, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { UserDisplay, SectionDetail } from '../sections/learning';

const mockUser = {
  name: 'Test User',
  cover: 'https://picsum.photos/1600',
  avatarUrl: 'https://picsum.photos/1600',
  email: 'test@test.test',
};

export default function LearningSectionPage() {
  const theme = useTheme();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const progress = (
    <m.div
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1999,
        position: 'fixed',
        transformOrigin: '0%',
        backgroundColor: theme.palette.primary.main,
        scaleX,
      }}
    />
  );

  return (
    <>
      <Helmet>
        <title>Learn</title>
      </Helmet>
      {progress}
      <Container>
        <Grid container spacing={3} marginBottom={3} marginTop={5}>
          <Grid item xs={12} md={9}>
            <SectionDetail />
          </Grid>
          <Grid item xs={12} md={3}>
            <UserDisplay user={mockUser} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
