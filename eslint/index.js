let counter = 0;
let ifVar = 0;

module.exports = {
    rules: {
        "find-error": {
            create: function(context) {
                return {
                    CallExpression(node) {
                    if (node.callee.name === 'montasirsFunction') {
                        context.report({
                        node: node,
                        message: "Montasir's function cannot be used. Use Taosif's instead."
                    });
                    }
                    }
                };
            }
        },
        "find-class-error": {
            create(context) {
                return {
                    ClassDeclaration(node) {
                    if (node.loc.end.line - node.loc.start.line > 3) {
                        context.report({
                        node: node,
                        message: "Too many lines in the class."
                    });
                    }
                    }
                };
            }
        },
        "find-switch-error": {
            create(context) {
                return {
                    SwitchStatement(node) {
                    if (node.cases.length > 5) {
                        context.report({
                        node: node,
                        message: "Too many switch cases."
                    });
                    }
                    }
                };
            }
        },
        "find-if-error-suggest-extract": {
            create(context) {
                return {
                    IfStatement(node) {
                        if (counter == 0){
                            ifVar = node.test.right.value;
                        }else{
                    		if (node.test.right.value == ifVar) {
                        		context.report({
                        			node: node,
                        			message: "Repeatation of the conditional inside 1st if, use extract method."
                    			});
                            }
                        } 
                        counter++;
                    }
                };
            }
        }
    }
};
  