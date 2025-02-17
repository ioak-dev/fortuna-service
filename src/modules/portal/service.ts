import * as schema from "./schema";
import * as Helper from "./helper";
import { decodeAppToken } from "../auth/helper";

export const getBaseSchema = async (req: any, res: any) => {
  const data = { ...schema.BASE_SCHEMA, user: null, space: null };

  const apiKey = req.headers["authorization"];
  const accessToken = await Helper.createPortalToken(apiKey);
  if (!accessToken) {
    res.status(200);
    res.send(data);
    res.end();
    return;
  }
  const decodedContent: any = await decodeAppToken(accessToken);
  console.log(decodedContent);
  data.user = decodedContent.claims.user;
  data.space = decodedContent.claims.space;
  data.authorization = accessToken;
  res.status(200);
  res.send(data);
  res.end();
};

export const createPortalSession = async (req: any, res: any) => {
  // const userId = req.user.user_id;

  const token = req.headers["authorization"];

  const data = await Helper.createPortalSession(
    req.params.space,
    req.params.name,
    token
  );
  res.status(200);
  res.send(data);
  res.end();
};

export const getModules = async (req: any, res: any) => {
  const data = [...schema.MODULE_SCHEMA];
  res.status(200);
  res.send(data);
  res.end();
};

export const getModuleOperations = async (req: any, res: any) => {
  console.log(req.params);
  const data = { ...schema.MODULE_EXPENSE_SCHEMA };
  res.status(200);
  res.send(data);
  res.end();
};
