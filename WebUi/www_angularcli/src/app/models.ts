export class Module {
    Name: string;
    Enabled: boolean;
    Status: string;
    Info: ModuleInfo;
}
export class ModuleInfo {

}

export class NewcamdInfo extends ModuleInfo {
    NrOfClients: number;
    NrOfChannels: number;
    ValidFrom: Date;
    ValidTo: Date;
    ListeningAt: string;
    Username: string;
    Password: string;
    DesKey: string;
}

export class KeyblockInfo extends ModuleInfo {
    HasValidKeyblock: boolean;
    NextRetrieval: Date;
    LastRetrieval: Date;
    ValidFrom: Date;
    ValidTo: Date;
    RefreshAfter: Date;
}

export class Log {
    Timestamp: Date;
    Module: string;
    Component: string;
    Message: string;
    Level: string;
}

export class Setting {
    Name: string;
    Value: any;
    Type: string;
    InputType: string;
}