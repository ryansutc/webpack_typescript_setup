export function square(x: number) {
  // this is a module that is never used. Dead code. It should 
  // be dropped in prod mode.
  console.log("square is being returned")
  return x * x;
}

export function cube(x: number) {
  // this module is imported and so should be kept.
  console.log("cube is being returned")
  return x * x * x;
}