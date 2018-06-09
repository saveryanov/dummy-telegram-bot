var chai = require('chai'),
    controllers = require("../controllers");


describe('Help controller', function () {
    it('Have default command group', function () {
        var defaultGroupName = controllers.help.defaultGroupName;
        chai.should().exist(controllers.help.commandGroups);
        chai.should().exist(controllers.help.commandGroups[defaultGroupName]);
    });

    it('Adds commands to default command group', function () {
        var command1 = {
            path: '/test_command',
            description: 'test command description'
        }
        var defaultGroupName = controllers.help.defaultGroupName;

        chai.expect(0).to.equal(controllers.help.commandGroups[defaultGroupName].length);
        controllers.help.addCommand(command1);
        chai.expect(1).to.equal(controllers.help.commandGroups[defaultGroupName].length);
        chai.expect(command1).to.deep.equal(controllers.help.commandGroups[defaultGroupName][0]);
        
        var command2 = {
            path: '/another_test_command %with% %arguments%',
            description: 'Second test command description'
        }
        controllers.help.addCommand(command2);
        chai.expect(2).to.equal(controllers.help.commandGroups[defaultGroupName].length);
        chai.expect(command2).to.deep.equal(controllers.help.commandGroups[defaultGroupName][1]);
    });

    it('Adds commands to custom command group', function () {
        var customGroupName = "Test group name";
        var command1 = {
            path: '/test_command',
            description: 'test command description',
            group: customGroupName
        }

        chai.should().not.exist(controllers.help.commandGroups[customGroupName]);
        controllers.help.addCommand(command1);
        chai.expect(1).to.equal(controllers.help.commandGroups[customGroupName].length);
        chai.expect({
            path: command1.path,
            description: command1.description
        }).to.deep.equal(controllers.help.commandGroups[customGroupName][0]);
        
        var command2 = {
            path: '/another_test_command %with% %arguments%',
            description: 'Second test command description',
            group: customGroupName
        }
        controllers.help.addCommand(command2);
        chai.expect(2).to.equal(controllers.help.commandGroups[customGroupName].length);
        chai.expect({
            path: command2.path,
            description: command2.description
        }).to.deep.equal(controllers.help.commandGroups[customGroupName][1]);
    });

    it('Generates help text', function () {
        chai.should().exist(controllers.help.getText);
        var helpText = controllers.help.getText();
        chai.should().exist(helpText);
        chai.expect('string').to.equal(typeof helpText);
        chai.should().exist(helpText.length);
    });
});