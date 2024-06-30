const opacities = [
  {
    post: '1/3',
    str: '54'
  },{
    post: '2/3',
    str: 'a8',
  },{
    post: '1/10',
    str: '25'
  }
];

const baseThemeColours = {
  'offwhite': '#fffef8',
  'lightgrey': '#eaeaea',
  'beige': '#ddc5ba',
  'offblack': '#1c1414',
};

const themeColours = {};

for (let key in baseThemeColours){
  const base = baseThemeColours[key];
  themeColours[key] = base;
  for (let opacity of opacities){
    themeColours[`${key}-${opacity.post}`] = `${base}${opacity.str}`
  }
}

export default themeColours;