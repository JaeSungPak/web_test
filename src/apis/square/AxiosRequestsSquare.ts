import request from "apis/square/AxiosInstanceSquare";
import { ResGetCharacter } from "./SquareAPITypes";

export const getCharacter = (id: string) => {
  const TARGET_API_URL = `get_fbx/${id}`;
  return request<ResGetCharacter>({
    url: `${TARGET_API_URL}`,
    method: "get",
    responseType: "blob",
  });
};
