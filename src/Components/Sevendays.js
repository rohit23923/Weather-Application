import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, styled } from '@mui/material';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: '20px',
  backgroundColor: '#000',
  color: '#fff',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    overflowX: 'auto',
  },
}));

const StyledTableCell = styled(TableCell)({
  color: '#fff',
  fontWeight: 'bold',
});

const Heading = styled(Typography)({
  marginTop: '20px',
  fontWeight: 'bold',
  fontSize: '24px',
  textAlign: 'center',
});

const Sevendays = ({ sevenDaysData }) => {
  return (
    <Box>
      <Heading>Next 7 Days Forecasting</Heading>
      {sevenDaysData?.length > 0 && (
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Icon</StyledTableCell>
                <StyledTableCell>Max Temp (°C)</StyledTableCell>
                <StyledTableCell>Min Temp (°C)</StyledTableCell>
                <StyledTableCell>Wind Speed (kph)</StyledTableCell>
                <StyledTableCell>Humidity (%)</StyledTableCell>
                <StyledTableCell>Sunrise</StyledTableCell>
                <StyledTableCell>Sunset</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sevenDaysData.map((day, index) => (
                <TableRow key={index}>
                  <StyledTableCell>{day.date}</StyledTableCell>
                  <StyledTableCell>
                    <img src={day.icon} alt="weather icon" />
                  </StyledTableCell>
                  <StyledTableCell>{day.max_temp}</StyledTableCell>
                  <StyledTableCell>{day.min_temp}</StyledTableCell>
                  <StyledTableCell>{day.windSpeed}</StyledTableCell>
                  <StyledTableCell>{day.humidity}</StyledTableCell>
                  <StyledTableCell>{day.sunrise}</StyledTableCell>
                  <StyledTableCell>{day.sunset}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      )}
    </Box>
  );
};

export default Sevendays;
