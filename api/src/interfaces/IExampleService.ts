import { ExampleEntity } from "../entities/example.entity";

export interface IExampleService {
  /**
   * Gets one example entity for given example id
   * @param id example id
   * @returns a example entity. otherwise throws not found exception
   */
  getOneAsync(id: string): Promise<ExampleEntity>;
}
