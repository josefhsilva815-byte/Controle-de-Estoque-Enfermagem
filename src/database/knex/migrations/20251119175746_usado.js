/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    const data = new Date().toISOString().split("T")[0];
    return knex.schema.createTable("usado", (table) => {
        table.increments("id").unsigned().primary();
        table.integer("instrutor_id").unsigned().notNullable();
        table.integer("item_id").unsigned().notNullable();
        table.integer("quantidade").unsigned().notNullable();
        table.check("quantidade >= 1");
        table.string("disciplina", 100).notNullable();
        table.text("observacao").defaultTo("vazio");
        table.string("turma", 100).notNullable();
        table.enu("turno", ["manhã", "tarde", "noite"]).notNullable();
        table.date("data_criacao").defaultTo(data);

        table.foreign("instrutor_id").references("id").inTable("instrutores");
        table.foreign("item_id").references("id").inTable("estoque");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("usado")
};
