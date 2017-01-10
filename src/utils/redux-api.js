//var getAccessToken = require("../../common/utils/access_token.js").getAccessToken

import { CALL_API } from "redux-api-middleware"

function getToken() {
  return "placeholder"
}

const createAPIAction = ({ name, endpoint, method, body = { } }) => {

  const headers = {
    "Content-Type": "application/vnd.api+json",
    "Accept": "application/vnd.api+json",
    "Authorization": `Bearer ${getToken()}`,
  }

  if (method === "GET") {
    return {
      [CALL_API]: {
        endpoint, method, headers,
        types: [
          `${name}_REQUEST`,
          `${name}_SUCCESS`,
          `${name}_FAILURE`,
        ],
      },
    }
  } else {
    return {
      [CALL_API]: {
        endpoint, method, headers,
        body: JSON.stringify(body),
        types: [
          `${name}_REQUEST`,
          `${name}_SUCCESS`,
          `${name}_FAILURE`,
        ],
      },
    }
  }

}

export default createAPIAction
