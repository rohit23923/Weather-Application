import React, { useEffect, useState } from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Cloud } from '@mui/icons-material';

const OuterBox = styled(Box)({
  margin: "30px 60px",
});

const StyledTypography = styled(Typography)({
  padding: "10px",
  fontSize: "20px",
});

const Info = ({ result, setSevendata }) => {
  const sevenDays = () => {
    if (result && result.forecast) {
      const data = result.forecast.forecastday;
      const impData = data.map((item) => ({
        date: item.date,
        icon: item.day.condition.icon,
        max_temp: item.day.maxtemp_c,
        min_temp: item.day.mintemp_c,
        windSpeed: item.day.maxwind_kph,
        humidity: item.day.avghumidity,
        sunrise: item.astro.sunrise,
        sunset: item.astro.sunset,
      }));
      setSevendata(impData);
    }
  };

  useEffect(() => {
    sevenDays();
  }, [result]); // Add 'result' as a dependency

  return (
    result && Object.keys(result).length > 0 ? (
      <OuterBox>
        <Box>
          <StyledTypography><LocationOn /> Location: {result.location.name}, {result.location.country}</StyledTypography>
          <StyledTypography><SettingsBrightness /> Temperature: {result.current.temp_c}°C</StyledTypography>
          <StyledTypography><Opacity /> Humidity: {result.current.humidity}%</StyledTypography>
          <StyledTypography><LocationOn /> Wind speed: {result.current.wind_kph} kph</StyledTypography>
          <StyledTypography><Cloud /> Clouds: {result.current.cloud}</StyledTypography>
        </Box>
      </OuterBox>
    ) : null
  );
};

export default Info;
