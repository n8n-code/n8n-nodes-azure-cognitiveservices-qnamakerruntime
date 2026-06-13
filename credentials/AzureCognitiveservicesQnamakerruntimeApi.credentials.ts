import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureCognitiveservicesQnamakerruntimeApi implements ICredentialType {
        name = 'N8nDevAzureCognitiveservicesQnamakerruntimeApi';

        displayName = 'Azure Cognitiveservices Qnamakerruntime API';

        icon: Icon = { light: 'file:../nodes/AzureCognitiveservicesQnamakerruntime/azure-cognitiveservices-qnamakerruntime.png', dark: 'file:../nodes/AzureCognitiveservicesQnamakerruntime/azure-cognitiveservices-qnamakerruntime.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Cognitiveservices Qnamakerruntime API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
