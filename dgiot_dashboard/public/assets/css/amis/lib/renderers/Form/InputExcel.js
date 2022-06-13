"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelControlRenderer = void 0;
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var react_dropzone_1 = (0, tslib_1.__importDefault)(require("react-dropzone"));
var helper_1 = require("../../utils/helper");
var Item_1 = require("./Item");
var ExcelControl = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(ExcelControl, _super);
    function ExcelControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false
        };
        return _this;
    }
    ExcelControl.prototype.handleDrop = function (files) {
        var _this = this;
        var _a = this.props, allSheets = _a.allSheets, onChange = _a.onChange;
        var excel = files[0];
        var reader = new FileReader();
        reader.readAsArrayBuffer(excel);
        reader.onload = function () { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
            var _this = this;
            return (0, tslib_1.__generator)(this, function (_a) {
                if (reader.result) {
                    Promise.resolve().then(function () { return new Promise(function(resolve){require(['exceljs'], function(ret) {resolve(tslib_1.__importStar(ret));})}); }).then(function (ExcelJS) { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
                        var workbook, sheetsResult_1, worksheet;
                        var _this = this;
                        return (0, tslib_1.__generator)(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.ExcelJS = ExcelJS;
                                    workbook = new ExcelJS.Workbook();
                                    return [4 /*yield*/, workbook.xlsx.load(reader.result)];
                                case 1:
                                    _a.sent();
                                    if (allSheets) {
                                        sheetsResult_1 = [];
                                        workbook.eachSheet(function (worksheet) {
                                            sheetsResult_1.push({
                                                sheetName: worksheet.name,
                                                data: _this.readWorksheet(worksheet)
                                            });
                                            onChange(sheetsResult_1);
                                        });
                                    }
                                    else {
                                        worksheet = workbook.worksheets[0];
                                        onChange(this.readWorksheet(worksheet));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); };
    };
    /**
     * 读取单个 sheet 的内容
     */
    ExcelControl.prototype.readWorksheet = function (worksheet) {
        var _this = this;
        var result = [];
        var _a = this.props, parseMode = _a.parseMode, plainText = _a.plainText;
        if (parseMode === 'array') {
            worksheet.eachRow(function (row, rowNumber) {
                var values = row.values;
                values.shift(); // excel 返回的值是从 1 开始的，0 节点永远是 null
                result.push(values);
            });
            return result;
        }
        else {
            var firstRowValues_1 = [];
            worksheet.eachRow(function (row, rowNumber) {
                // 将第一列作为字段名
                if (rowNumber == 1) {
                    firstRowValues_1 = row.values;
                }
                else {
                    var data_1 = {};
                    row.eachCell(function (cell, colNumber) {
                        if (firstRowValues_1[colNumber]) {
                            var value = cell.value;
                            if (plainText) {
                                var ExcelValueType = _this.ExcelJS.ValueType;
                                if (cell.type === ExcelValueType.Hyperlink) {
                                    value = cell.value.hyperlink;
                                }
                                else if (cell.type === ExcelValueType.Formula) {
                                    value = cell.value.result;
                                }
                                else if (cell.type === ExcelValueType.RichText) {
                                    value = cell.value.richText
                                        .map(function (item) { return item.text; })
                                        .join('');
                                }
                                else if (cell.type === ExcelValueType.Error) {
                                    value = '';
                                }
                            }
                            data_1[firstRowValues_1[colNumber]] = value;
                        }
                    });
                    result.push(data_1);
                }
            });
            return result;
        }
    };
    ExcelControl.prototype.render = function () {
        var _a = this.props, className = _a.className, cx = _a.classnames, ns = _a.classPrefix, value = _a.value, disabled = _a.disabled, __ = _a.translate;
        return (react_1.default.createElement("div", { className: cx('ExcelControl', className) },
            react_1.default.createElement(react_dropzone_1.default, { key: "drop-zone", onDrop: this.handleDrop, accept: ".xlsx", multiple: false, disabled: disabled }, function (_a) {
                var getRootProps = _a.getRootProps, getInputProps = _a.getInputProps;
                return (react_1.default.createElement("section", { className: cx('ExcelControl-container', className) },
                    react_1.default.createElement("div", (0, tslib_1.__assign)({}, getRootProps({ className: cx('ExcelControl-dropzone') })),
                        react_1.default.createElement("input", (0, tslib_1.__assign)({}, getInputProps())),
                        react_1.default.createElement("p", null, __('Excel.placeholder')))));
            })));
    };
    ExcelControl.defaultProps = {
        allSheets: false,
        parseMode: 'object',
        includeEmpty: true,
        plainText: true
    };
    (0, tslib_1.__decorate)([
        helper_1.autobind,
        (0, tslib_1.__metadata)("design:type", Function),
        (0, tslib_1.__metadata)("design:paramtypes", [Array]),
        (0, tslib_1.__metadata)("design:returntype", void 0)
    ], ExcelControl.prototype, "handleDrop", null);
    return ExcelControl;
}(react_1.default.PureComponent));
exports.default = ExcelControl;
var ExcelControlRenderer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(ExcelControlRenderer, _super);
    function ExcelControlRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExcelControlRenderer = (0, tslib_1.__decorate)([
        (0, Item_1.FormItem)({
            type: 'input-excel'
        })
    ], ExcelControlRenderer);
    return ExcelControlRenderer;
}(ExcelControl));
exports.ExcelControlRenderer = ExcelControlRenderer;
//# sourceMappingURL=./renderers/Form/InputExcel.js.map