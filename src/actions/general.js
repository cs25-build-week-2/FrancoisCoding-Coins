// examine, take, drop, sell, status, carry, receive, pray, name change, transmog
import { axiosWithAuth } from "../util/axiosWIthAuth";
import { wait } from "./cooldown";

export const START_INIT = "START_INIT";
export const INIT_SUCCESS = "INIT_SUCCESS";
export const INIT_ERROR = "INIT_ERROR";

export const initGame = async dispatch => {
  dispatch({ type: START_INIT });
  try {
    const res = await axiosWithAuth().get("adv/init/");
    dispatch({ type: INIT_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: INIT_ERROR, payload: err.response });
  }
};

export const START_EXAMINE = "START_EXAMINE";
export const EXAMINE_SUCCESS = "EXAMINE_SUCCESS";
export const EXAMINE_ERROR = "EXAMINE_ERROR";

export const examine = async (dispatch, target) => {
  dispatch({ type: START_EXAMINE });
  try {
    const res = await axiosWithAuth().post("adv/examine/", { name: target });
    // console.log("res.data ", res.data);
    dispatch({ type: EXAMINE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: EXAMINE_ERROR, payload: err.response });
  }
};

export const START_TAKE = "START_TAKE";
export const TAKE_SUCCESS = "TAKE_SUCCESS";
export const TAKE_ERROR = "TAKE_ERROR";

export const take = async (dispatch, item) => {
  dispatch({ type: START_TAKE });
  try {
    const res = await axiosWithAuth().post("adv/take/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: TAKE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: TAKE_ERROR, payload: err.response });
  }
};

export const START_SELL = "START_SELL";
export const SELL_SUCCESS = "SELL_SUCCESS";
export const SELL_ERROR = "SELL_ERROR";

export const sell = async (dispatch, item) => {
  dispatch({ type: START_SELL });
  try {
    const res = await axiosWithAuth().post("adv/sell/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: SELL_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: SELL_ERROR, payload: err.response });
  }
};

export const START_DROP = "START_DROP";
export const DROP_SUCCESS = "DROP_SUCCESS";
export const DROP_ERROR = "DROP_ERROR";

export const drop = async (dispatch, item) => {
  dispatch({ type: START_DROP });
  try {
    const res = await axiosWithAuth().post("adv/drop/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: DROP_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: DROP_ERROR, payload: err.response });
  }
};

export const START_CARRY = "START_CARRY";
export const CARRY_SUCCESS = "CARRY_SUCCESS";
export const CARRY_ERROR = "CARRY_ERROR";

export const carry = async (dispatch, item) => {
  dispatch({ type: START_CARRY });
  try {
    const res = await axiosWithAuth().post("adv/carry/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: CARRY_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: CARRY_ERROR, payload: err.response });
  }
};

export const START_RECEIVE = "START_RECEIVE";
export const RECEIVE_SUCCESS = "RECEIVE_SUCCESS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const receive = async (dispatch, item) => {
  dispatch({ type: START_RECEIVE });
  try {
    const res = await axiosWithAuth().post("adv/receive/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: RECEIVE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: RECEIVE_ERROR, payload: err.response });
  }
};

export const START_STATUS = "START_STATUS";
export const STATUS_SUCCESS = "STATUS_SUCCESS";
export const STATUS_ERROR = "STATUS_ERROR";

export const playerStatus = async dispatch => {
  dispatch({ type: START_STATUS });
  try {
    const res = await axiosWithAuth().post("adv/status/");
    dispatch({ type: STATUS_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: STATUS_ERROR, payload: err.response });
  }
};
