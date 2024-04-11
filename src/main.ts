import { web } from "./application/web";
import { logger } from "./application/logger";
const PORT = process.env.PORT || 3000;

web.listen(PORT, () => {
  logger.info("Listening on port: " + PORT);
});
