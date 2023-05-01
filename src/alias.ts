type NoopDeveloper={
  name:string
}

type JuniorDeveloper={
   name:string,
   experience:number,
   expertise:string,
}

const newDeveloper:NoopDeveloper | JuniorDeveloper={
    name:"Tads",
    expertise:'JS',
    experience:6
}