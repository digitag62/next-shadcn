import prismadb from "./prismadb";

export const createTodo = async (field: string) => {
    try {
        const res = await prismadb.todos.create({
          data: {
            remarks: field,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
  
        console.log({res});
      } catch (error) {
        console.log({error});
      }
}