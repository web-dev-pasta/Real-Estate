import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  links: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Properties",
      link: "/properties",
    },
    {
      label: "Services",
      link: "/services",
    },
  ],
};

const linksSlice = createSlice({
  name: "links",
  initialState,
});

export default linksSlice.reducer;
