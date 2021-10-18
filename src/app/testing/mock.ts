export function mock<P extends object>(patch: Partial<P> = {}): P {
    return <P> patch;
}