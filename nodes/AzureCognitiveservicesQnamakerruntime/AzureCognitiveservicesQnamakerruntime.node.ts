import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureCognitiveservicesQnamakerruntime implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Cognitiveservices Qnamakerruntime',
                name: 'N8nDevAzureCognitiveservicesQnamakerruntime',
                icon: { light: 'file:./azure-cognitiveservices-qnamakerruntime.png', dark: 'file:./azure-cognitiveservices-qnamakerruntime.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'QnAMaker runtime API',
                defaults: { name: 'Azure Cognitiveservices Qnamakerruntime' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureCognitiveservicesQnamakerruntimeApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
