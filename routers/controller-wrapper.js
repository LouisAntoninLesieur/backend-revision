/* 
This file writes a function that wraps a controller when it is called, i.e that any disfunction in the controller being called will be catched and return an error 
This allows us to have a centralised error handling system and avoid try/catches in controllers, making them easier to read and debug
*/

export function controllerWrapper(mdw) {
  return async (req, res, next) => {
    try {
      await mdw(req, res, next);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unexpected server error. Please try again later while we are checking our Pokeballs." });
    }
  };
};
