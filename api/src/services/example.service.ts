import { ExampleEntity } from "../entities/example.entity";
import { fetchExampleByIdAsync } from "../repositories/example.repository";
import { IExampleService as IExampleService } from "../interfaces/IExampleService";

export class ExampleService implements IExampleService {
  /**
   * Gets one example entity for given example id
   * @param id example id
   * @returns a example entity. null if example was not found.
   */
  async getOneAsync(id: string): Promise<ExampleEntity> {
    return await fetchExampleByIdAsync(id);
  }
}
