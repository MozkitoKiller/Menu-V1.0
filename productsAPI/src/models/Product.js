import pool from '../config/dbconfig.cjs'

export class Product {
    static async create({ name, description, price, availability }) {
        const query = `
          INSERT INTO produtos (name, description, price, availability) 
          VALUES ($1, $2, $3, $4) 
          RETURNING *
        `;
        const values = [name, description, price, availability];
        try {
            const result = await pool.query(query, values);
            
            return result.rows[0];
        } catch (error) {
            throw new Error('Error creating product')
        }
    }

    static async delete(id) {
        try {
            const product = await this.findManyById(id)
            console.log(product)

            if(!product) {
                return console.error({error: 'No product found'})
            }

            const deleted = await pool.query(`DELETE FROM produtos WHERE id IN (${id})`)
           
            return product
        } catch (error) {
            throw new Error('Erro deleting the product')
        }
    }

    static async findAll() {
        try {
            const result = await pool.query('SELECT * FROM produtos');
            return result.rows;
        } catch (error) {
            throw new Error('Error getting products')
        }

    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM produtos WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async findManyById(ids) {
        const query = `SELECT * FROM produtos WHERE id IN (${ids}) `
        const result = await pool.query(query)
        return result.rows
    }

}