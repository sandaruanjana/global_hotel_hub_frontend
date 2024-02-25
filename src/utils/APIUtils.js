import { BASE_URL } from "../constants";

export const getAllCategories = (accessToken) => {
  return fetch(`${BASE_URL}/category`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching categories:", error);
      throw error;
    });
};

export const signUp = (data) => {
  return fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error signing up:", error);
      throw error;
    });
};

export const login = (data) => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error logging in:", error);
      throw error;
    });
};

export const getCurrentUser = (accessToken) => {
  return fetch(`${BASE_URL}/user/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching current user:", error);
      throw error;
    });
};

export const createReceip = (receip, accessToken) => {
  return fetch(`${BASE_URL}/recipe`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(receip),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error creating receip:", error);
      throw error;
    });
};

export const getAllHotels = (accessToken) => {
  return fetch(`${BASE_URL}/hotels/search`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error retrieving receip:", error);
      throw error;
    });
};

export const getFilteredHotels = (accessToken,data) => {
  return fetch(`${BASE_URL}/hotels/search`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error retrieving hotels:", error);
      throw error;
    });
};

export const getSearchHistory = (accessToken) => {
  return fetch(`${BASE_URL}/search/history/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error retrieving profile history:", error);
      throw error;
    });
};

export const getHotelById = (id, accessToken) => {
  return fetch(`${BASE_URL}/hotels/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error retrieving hotel by ID:", error);
      throw error;
    });
};



