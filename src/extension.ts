'use strict';
import * as vscode from 'vscode';
import commands from './commands';
export function activate(context: vscode.ExtensionContext) {
    commands.registerCommand(context);
}
export function deactivate() {
}
