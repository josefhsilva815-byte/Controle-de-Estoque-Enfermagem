/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    const hoje = new Date().toISOString().split("T")[0];
    return knex.schema.createTable("estoque", (table) => {
        table.increments("id").primary().unsigned();
        table.string("nome").notNullable();
        table.integer("quantidade").notNullable();
        table.string("descricao").defaultTo("vazio");
        table.enu("categoria", ['material', 'equipamento', 'outros']).defaultTo("outros");
        table.date("fabricacao").notNullable();
        table.date("validade").notNullable();
        table.integer("instrutor_id").unsigned().notNullable();
        table.date("data_criacao").defaultTo(hoje);

        table.foreign("instrutor_id").references("id").inTable("instrutores")
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("estoque")
};
