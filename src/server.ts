import app from "./app";

const PORT = 3000;

const server = () => {
  try {
    app.listen(PORT, () => {
      console.log(`University Management Server is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

server();