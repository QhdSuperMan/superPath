export function getSession(key, type = "json") {
  let result = sessionStorage.getItem(key);
  if (type === "json") {
    try {
      result = JSON.parse(result);
    } catch (error) {
      result = null;
    }
  }
  return result;
}

export function setSession(key, data, type = "json") {
  if (type === "json") {
    sessionStorage.setItem(key, JSON.stringify(data));
  } else {
    sessionStorage.setItem(key, data);
  }
}


export function getLocalStorage(key, type = "json") {
  let result = localStorage.getItem(key);
  if (type === "json") {
    try {
      result = JSON.parse(result);
    } catch (error) {
      result = null;
    }
  }
  return result;
}

export function setLocalStorage(key, data, type = "json") {
  if (type === "json") {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    localStorage.setItem(key, data);
  }
}
