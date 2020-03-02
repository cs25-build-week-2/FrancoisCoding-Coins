// dash, fly, warp, recall, move
import { axiosWithAuth } from "../util/axiosWIthAuth";
import { wait } from "./cooldown";

export const START_MOVE = "START_MOVE";
export const MOVE_SUCCESS = "MOVE_SUCCESS";
export const MOVE_ERROR = "MOVE_ERROR";

export const move = async (dispatch, dir, nextRoom = null) => {
  let command =
    nextRoom !== null
      ? { direction: dir, next_room_id: `${nextRoom}` }
      : { direction: dir };
  dispatch({ type: START_MOVE });
  try {
    const res = await axiosWithAuth().post("adv/move/", command);
    // console.log(res.data);
    dispatch({ type: MOVE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: MOVE_ERROR, payload: err.response });
  }
};

export const START_FLY = "START_FLY";
export const FLY_SUCCESS = "FLY_SUCCESS";
export const FLY_ERROR = "FLY_ERROR";

export const fly = async (dispatch, dir, nextRoom) => {
  let direction = { direction: dir, next_room_id: nextRoom };
  dispatch({ type: START_FLY });
  try {
    const res = await axiosWithAuth().post("adv/fly/", direction);
    dispatch({ type: FLY_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: FLY_ERROR, payload: err.response });
  }
};

export const START_RECALL = "START_RECALL";
export const RECALL_SUCCESS = "RECALL_SUCCESS";
export const RECALL_ERROR = "RECALL_ERROR";

export const recall = async dispatch => {
  dispatch({ type: START_RECALL });
  try {
    const res = await axiosWithAuth().post("adv/recall/");
    dispatch({ type: RECALL_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: RECALL_ERROR, payload: err.response });
  }
};

export const START_WARP = "START_WARP";
export const WARP_SUCCESS = "WARP_SUCCESS";
export const WARP_ERROR = "WARP_ERROR";

export const warp = async dispatch => {
  dispatch({ type: START_WARP });
  try {
    const res = await axiosWithAuth().post("adv/warp/");
    dispatch({ type: WARP_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: WARP_ERROR, payload: err.response });
  }
};

export const START_DASH = "START_DASH";
export const DASH_SUCCESS = "DASH_SUCCESS";
export const DASH_ERROR = "DASH_ERROR";

export const dash = async (dispatch, direction, num_rooms, next_room_ids) => {
  let command = {
    direction: direction,
    num_rooms: `${num_rooms}`,
    next_room_ids: next_room_ids
  };
  dispatch({ type: START_DASH });
  try {
    const res = await axiosWithAuth().post("adv/dash/", command);
    dispatch({ type: DASH_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: DASH_ERROR, payload: err.response });
  }
};
