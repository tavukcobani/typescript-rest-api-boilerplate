import { Controller, Get, Path, Route, Tags, Response, Security } from "tsoa";
import { ExampleEntity } from "../entities/example.entity";
import {
  NotFoundErrorHandler,
  InternalServerErrorHandler,
} from "../handlers/error";
import { IExampleService } from "../interfaces/IExampleService";
import { ExampleService } from "../services/example.service";
import { EntityNotFoundError } from "typeorm";

@Route("api/examples")
@Tags("Examples")
export class ExampleController extends Controller {
  exampleService: IExampleService = new ExampleService();

  /**
   * @summary Gets one example by example id
   *
   * @param  {string} id UUID of the example to search
   */
  @Response(404, "Example not found")
  @Response(400, "Bad request: invalid example id")
  @Response(500, "Internal server error")
  // @Security("jwt")
  @Get("{id}")
  public async getOneAsync(@Path() id: string): Promise<ExampleEntity> {
    return await this.exampleService.getOneAsync(id).catch((err) => {
      if (err instanceof EntityNotFoundError) {
        throw new NotFoundErrorHandler("Example not found");
      } else {
        throw new InternalServerErrorHandler(err);
      }
    });
  }
}
