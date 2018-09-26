let x: [string, number];

x = ["test", 42]; // Okay

x = [42, "test"]; // Error

x = ["test", 42, "extra"]; // Error
