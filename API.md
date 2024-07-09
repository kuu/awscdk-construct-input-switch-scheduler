# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventBridgeSchedule <a name="EventBridgeSchedule" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule.Initializer"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-input-switch-scheduler'

new EventBridgeSchedule(scope: Construct, id: string, props: EventBridgeScheduleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeSchedule.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeScheduleProps">EventBridgeScheduleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-input-switch-scheduler.EventBridgeScheduleProps">EventBridgeScheduleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeSchedule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule.isConstruct"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-input-switch-scheduler'

EventBridgeSchedule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeSchedule.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `rule`<sup>Required</sup> <a name="rule" id="awscdk-construct-input-switch-scheduler.EventBridgeSchedule.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---


### InputSwitchScheduler <a name="InputSwitchScheduler" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.Initializer"></a>

```typescript
import { InputSwitchScheduler } from 'awscdk-construct-input-switch-scheduler'

new InputSwitchScheduler(scope: Construct, id: string, props: InputSwitchSchedulerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchScheduler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchScheduler.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps">InputSwitchSchedulerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps">InputSwitchSchedulerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchScheduler.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchScheduler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.isConstruct"></a>

```typescript
import { InputSwitchScheduler } from 'awscdk-construct-input-switch-scheduler'

InputSwitchScheduler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchScheduler.property.lambda">lambda</a></code> | <code><a href="#awscdk-construct-input-switch-scheduler.Lambda">Lambda</a></code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchScheduler.property.schedule">schedule</a></code> | <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeSchedule">EventBridgeSchedule</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.property.lambda"></a>

```typescript
public readonly lambda: Lambda;
```

- *Type:* <a href="#awscdk-construct-input-switch-scheduler.Lambda">Lambda</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="awscdk-construct-input-switch-scheduler.InputSwitchScheduler.property.schedule"></a>

```typescript
public readonly schedule: EventBridgeSchedule;
```

- *Type:* <a href="#awscdk-construct-input-switch-scheduler.EventBridgeSchedule">EventBridgeSchedule</a>

---


### Lambda <a name="Lambda" id="awscdk-construct-input-switch-scheduler.Lambda"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-input-switch-scheduler.Lambda.Initializer"></a>

```typescript
import { Lambda } from 'awscdk-construct-input-switch-scheduler'

new Lambda(scope: Construct, id: string, props: LambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.Lambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.Lambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.Lambda.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-input-switch-scheduler.LambdaProps">LambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-input-switch-scheduler.Lambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-input-switch-scheduler.Lambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-input-switch-scheduler.Lambda.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-input-switch-scheduler.LambdaProps">LambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.Lambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-input-switch-scheduler.Lambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.Lambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-input-switch-scheduler.Lambda.isConstruct"></a>

```typescript
import { Lambda } from 'awscdk-construct-input-switch-scheduler'

Lambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-input-switch-scheduler.Lambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.Lambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-input-switch-scheduler.Lambda.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-input-switch-scheduler.Lambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-input-switch-scheduler.Lambda.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---


## Structs <a name="Structs" id="Structs"></a>

### EventBridgeScheduleProps <a name="EventBridgeScheduleProps" id="awscdk-construct-input-switch-scheduler.EventBridgeScheduleProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-input-switch-scheduler.EventBridgeScheduleProps.Initializer"></a>

```typescript
import { EventBridgeScheduleProps } from 'awscdk-construct-input-switch-scheduler'

const eventBridgeScheduleProps: EventBridgeScheduleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeScheduleProps.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.EventBridgeScheduleProps.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-input-switch-scheduler.EventBridgeScheduleProps.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="awscdk-construct-input-switch-scheduler.EventBridgeScheduleProps.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

### InputSwitchSchedulerProps <a name="InputSwitchSchedulerProps" id="awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps.Initializer"></a>

```typescript
import { InputSwitchSchedulerProps } from 'awscdk-construct-input-switch-scheduler'

const inputSwitchSchedulerProps: InputSwitchSchedulerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps.property.inputAttachments">inputAttachments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `inputAttachments`<sup>Required</sup> <a name="inputAttachments" id="awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps.property.inputAttachments"></a>

```typescript
public readonly inputAttachments: string[];
```

- *Type:* string[]

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="awscdk-construct-input-switch-scheduler.InputSwitchSchedulerProps.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---

### LambdaProps <a name="LambdaProps" id="awscdk-construct-input-switch-scheduler.LambdaProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-input-switch-scheduler.LambdaProps.Initializer"></a>

```typescript
import { LambdaProps } from 'awscdk-construct-input-switch-scheduler'

const lambdaProps: LambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-input-switch-scheduler.LambdaProps.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-input-switch-scheduler.LambdaProps.property.inputAttachments">inputAttachments</a></code> | <code>string[]</code> | *No description.* |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="awscdk-construct-input-switch-scheduler.LambdaProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `inputAttachments`<sup>Required</sup> <a name="inputAttachments" id="awscdk-construct-input-switch-scheduler.LambdaProps.property.inputAttachments"></a>

```typescript
public readonly inputAttachments: string[];
```

- *Type:* string[]

---



