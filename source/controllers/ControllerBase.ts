export abstract class ControllerBase {
    abstract Get(request,response);
    abstract Add(request,response);
    abstract Delete(request,response);
    abstract Edit(request,response);
}