interface ILesson {
    _id: string;
    name: string;
    description: string;
    module: string;
  }

  interface IModule {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: ILesson[]; 
  }