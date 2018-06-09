const defaultGroupName = "Main";

class HelpController {
    constructor() {
        this.defaultGroupName = defaultGroupName;
        this.commandGroups = {};
        this.commandGroups[defaultGroupName] = [];
    }

    addCommand({
        path,
        description,
        group = defaultGroupName
    } = {}) {
        if (!path) throw new Error('Path is empty');
        if (!description) throw new Error('Description is undefined');

        if (!Array.isArray(this.commandGroups[group])) {
            this.commandGroups[group] = new Array();
        }

        this.commandGroups[group].push({
            path: path,
            description: description
        })
    }
    
    getText() {
        var helpText = "";

        helpText += 'Bot commands: \n\n';
        
        for (let groupName of Object.keys(this.commandGroups)) {
            let commands = this.commandGroups[groupName];
            helpText += `${groupName}:\n`;
            for (let command of commands) {
                helpText += ` * ${command.path} - ${command.description}\n`;
            }
            helpText += "\n";
        }
        
        helpText += 'Good luck!';

        return helpText;
    }
}

module.exports = new HelpController();