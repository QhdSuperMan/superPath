var value: unknown = 1

type Result = | { success: true, value: unknown } | { success: false, error: Error };