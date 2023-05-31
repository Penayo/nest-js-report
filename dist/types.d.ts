/// <reference types="jsreport-chrome-pdf" />
/// <reference types="jsreport-docx" />
/// <reference types="jsreport-xlsx" />
/// <reference types="jsreport-html-to-xlsx" />
/// <reference types="jsreport-jsrender" />
/// <reference types="jsreport-pdf-utils" />
/// <reference types="jsreport-scripts" />
/// <reference types="jsreport-templates" />
import { TemplateRegistry, TemplateLike, Response } from 'jsreport-core';
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export type JsReportTemplate = DeepPartial<TemplateLike & TemplateRegistry['NamedTemplate'] & TemplateRegistry['ScriptsTemplate'] & TemplateRegistry['DocxTemplateModifier'] & TemplateRegistry['Html2XlsxTemplate'] & TemplateRegistry['XlsxTemplate'] & {
    xlsx: any;
}>;
export type Asset = {
    name: string;
    path?: string;
    content?: any;
    encoding?: string;
    scope?: 'global' | 'template';
};
export type JsReportResult = Response & {
    meta: {
        reportName: string;
        fileExtension: string;
        contentType: string;
        officeDocumentType: string;
        logs: any[];
        profileId: string;
    };
};
export type JsReportRenderOptions = {
    pdf?: boolean;
    fileName?: string;
};
export {};
