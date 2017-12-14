export function startApiCall(action) {
  return {
    type: `${action}_PENDING`
  };
}
