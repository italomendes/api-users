import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelations1645783075305 implements MigrationInterface {
  name = 'CreateRelations1645783075305';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "departmentId" uuid`);
    await queryRunner.query(`ALTER TABLE "user" ADD "roleId" uuid`);
    await queryRunner.query(`ALTER TABLE "department" ADD "costCenterId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "cost_center" DROP CONSTRAINT "UQ_e8c7662b4e2e3f7c34f1b915c7a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "role" DROP CONSTRAINT "UQ_ae4578dcaed5adff96595e61660"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_3d6915a33798152a079997cad28" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "department" ADD CONSTRAINT "FK_82a9054b496d07494b9a0941978" FOREIGN KEY ("costCenterId") REFERENCES "cost_center"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "department" DROP CONSTRAINT "FK_82a9054b496d07494b9a0941978"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_3d6915a33798152a079997cad28"`,
    );
    await queryRunner.query(
      `ALTER TABLE "role" ADD CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name")`,
    );
    await queryRunner.query(
      `ALTER TABLE "cost_center" ADD CONSTRAINT "UQ_e8c7662b4e2e3f7c34f1b915c7a" UNIQUE ("name")`,
    );
    await queryRunner.query(
      `ALTER TABLE "department" DROP COLUMN "costCenterId"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roleId"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "departmentId"`);
  }
}
