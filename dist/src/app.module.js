"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const config_service_1 = require("./config/config.service");
const students_module_1 = require("./students/students.module");
const students_dataloader_1 = __importDefault(require("./students/students.dataloader"));
const repository_factory_module_1 = __importDefault(require("./common/repository/repository-factory.module"));
const image_upload_module_1 = require("./image-upload/image-upload.module");
const context = {
    StudentsDataloader: students_dataloader_1.default()
};
const modules = [students_module_1.StudentsModule, repository_factory_module_1.default, image_upload_module_1.ImageUploadModule];
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            ...modules,
            typeorm_1.TypeOrmModule.forRoot(config_service_1.configService.getTypeOrmConfig()),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'src/schema.gql',
                debug: process.env.NODE_ENV === 'development',
                installSubscriptionHandlers: true,
                context
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map