type ContainerProps = {
    width: string;
    height?: string;
    children: React.ReactNode;
    center?: boolean;
};

export const Container: React.FC<ContainerProps> = ({ width, height = '100%', children, center = false }) => {
    return (
        <div className={`flex justify-center ${center ? 'items-center' : ''} w-full h-[${height}]`}>
            <div className={`w-[${width}]`}>{children}</div>
        </div>
    );
};
