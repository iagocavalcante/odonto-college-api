"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }
    getPort() {
        return this.getValue('PORT', true);
    }
    isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
    getTypeOrmConfig() {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USERNAME'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: ['dist/**/*.entity{.ts,.js}'],
            migrationsTableName: 'migrations',
            synchronize: false,
            migrations: ['dist/src/database/migrations/**/*{.ts,.js}'],
            cli: {
                migrationsDir: 'src/database/migrations',
            },
            ssl: this.isProduction(),
        };
    }
}
const configService = new ConfigService(process.env)
    .ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USERNAME',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map