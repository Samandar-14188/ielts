import React from "react";
import { Box, Button, Typography, Container, Paper } from "@mui/material";

const Login = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank"); // yangi oynada ochiladi
    // agar shu oynada ochilishini istasangiz:
    // window.location.href = url;
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          IELTS UNCO
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() =>
              handleRedirect("https://engnovate.com/ielts-reading-tests/")
            }
          >
            Reading
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() =>
              handleRedirect("https://engnovate.com/ielts-listening-tests/")
            }
          >
            Listening
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() =>
              handleRedirect("http://engnovate.com/ielts-writing-tests/")
            }
          >
            Writing
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
