import { Button, Card, CardActions, CardContent, CardHeader, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import configSectionList from './constant/config-section-list';
import Iconify from '../../components/iconify';

const SectionDetail = () => {
  // TODO: Get example audio file.
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxSectionExercises, setMaxSectionExercises] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(0);

  useEffect(() => {
    if (!params.id) {
      return;
    }
    const currentSection = configSectionList.find((section) => section.id === params.id);

    if (!currentSection) {
      navigate('/404');
      return;
    }

    setMaxSectionExercises(currentSection.count);
  }, [params, navigate]);

  useEffect(() => {
    if (maxSectionExercises <= 0) {
      return;
    }
    if (!searchParams.get('number')) {
      setSearchParams((prev) => prev.append('number', '1'));
      setCurrentExercise(1);
      return;
    }

    setCurrentExercise(parseInt(searchParams.get('number'), 10));
  }, [searchParams, maxSectionExercises, setSearchParams]);

  console.log(searchParams, params);

  // TODO: GET exercise from API.

  return (
    <Card sx={{ padding: 2 }}>
      <CardHeader title={`Exercise ${currentExercise}`} subheader="Some description" />
      <CardContent>
        <Stack direction="row" spacing={1} justifyContent="center">
          <Button
            startIcon={<Iconify icon="material-symbols:headset-mic" />}
            size="large"
            variant="contained"
            color="warning"
          >
            Listen
          </Button>
          <Button
            startIcon={<Iconify icon="ic:outline-mic" />}
            size="large"
            variant="contained"
            color="error"
          >
            Record
          </Button>
        </Stack>
      </CardContent>
      <CardActions>
        <Button sx={{ marginRight: 'auto' }} variant="outlined" size="large">
          Prev
        </Button>
        <Button disabled sx={{ marginLeft: 'auto' }} size="large" variant="contained">
          Next
        </Button>
      </CardActions>
    </Card>
  );
};

export default SectionDetail;
