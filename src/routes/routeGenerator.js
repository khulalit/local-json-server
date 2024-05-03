const generateRoutes = (app, routes) => {
  routes.forEach((route) => {
    if (route.Method === "GET") {
      app.get(route.Route, (req, res) => {
        res.json(route.Data);
      });
    } else if (route.Method === "POST") {
      app.post(route.Route, (req, res) => {
        const newData = req.body;
        res.json({ message: "Data added successfully", newData });
      });
    }
  });
};

module.exports = {
  generateRoutes,
};
