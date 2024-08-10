//import { dataSource } from '../../../database/postgresql.datasource';
import { ExampleEntity } from "../entities/example.entity";

//const exampleRepository = dataSource.getRepository(ExampleEntity);

/**
 * Fetches a example by route id
 * @param exampleId uuid
 * @returns Finds first entity that matches given where condition
 * If entity was not found in the database - returns null.
 */
export const fetchExampleByIdAsync = async (exampleId: string) => {
  /* return await exampleRepository.findOneByOrFail({
        ID: exampleId
    }); */

  const exampleEntity = new ExampleEntity();
  exampleEntity.ID = exampleId;

  return exampleEntity;
};
