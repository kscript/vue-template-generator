import * as vscode from 'vscode';
import component from './component';
const registerCommand = function(context: any){
  context.subscriptions.push.apply(context.subscriptions, [
    vscode.commands.registerCommand('vueTemplateGenerator.uicomponent', () => {
      component(context)
    })
  ])
}
export default {
  registerCommand
}
