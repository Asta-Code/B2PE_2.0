import app from "../app";

const PORT = process.env.PORT ?? 8000;

const server = app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

export default server;
