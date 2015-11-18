// Type definitions for Angular v2.0.0-local_sha.aaf41fc
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// ***********************************************************
// This file is generated by the Angular build process.
// Please do not create manual edits or send pull requests
// modifying this file.
// ***********************************************************

// angular2/testing depends transitively on these libraries.
// If you don't have them installed you can install them using TSD
// https://github.com/DefinitelyTyped/tsd

///<reference path="./angular2.d.ts"/>




/**
 * @module
 * @description
 * This module is used for writing tests for applications written in Angular.
 * 
 * This module is not included in the `angular2` module; you must import the test module explicitly.
 */
declare module ngTesting {  
  abstract class RootTestComponent {
    
    debugElement: ng.DebugElement;
    
    detectChanges(): void;
    
    destroy(): void;
    
  }

    
  /**
   * Builds a RootTestComponent for use in component level tests.
   */
  class TestComponentBuilder {
    
    constructor(_injector: ng.Injector);
    
    /**
     * Overrides only the html of a {@link ComponentMetadata}.
     * All the other properties of the component's {@link ng.ViewMetadata} are preserved.
     * 
     * @param {ng.Type} component
     * @param {string} html
     * 
     * @return {TestComponentBuilder}
     */
    overrideTemplate(componentType: ng.Type, template: string): TestComponentBuilder;
    
    /**
     * Overrides a component's {@link ng.ViewMetadata}.
     * 
     * @param {ng.Type} component
     * @param {view} View
     * 
     * @return {TestComponentBuilder}
     */
    overrideView(componentType: ng.Type, view: ng.ViewMetadata): TestComponentBuilder;
    
    /**
     * Overrides the directives from the component {@link ng.ViewMetadata}.
     * 
     * @param {ng.Type} component
     * @param {ng.Type} from
     * @param {ng.Type} to
     * 
     * @return {TestComponentBuilder}
     */
    overrideDirective(componentType: ng.Type, from: ng.Type, to: ng.Type): TestComponentBuilder;
    
    /**
     * Overrides one or more injectables configured via `providers` metadata property of a directive
     * or
     * component.
     * Very useful when certain providers need to be mocked out.
     * 
     * The providers specified via this method are appended to the existing `providers` causing the
     * duplicated providers to
     * be overridden.
     * 
     * @param {ng.Type} component
     * @param {any[]} providers
     * 
     * @return {TestComponentBuilder}
     */
    overrideProviders(type: ng.Type, providers: any[]): TestComponentBuilder;
    
    /**
     * @deprecated
     */
    overrideBindings(type: ng.Type, providers: any[]): TestComponentBuilder;
    
    /**
     * Overrides one or more injectables configured via `providers` metadata property of a directive
     * or
     * component.
     * Very useful when certain providers need to be mocked out.
     * 
     * The providers specified via this method are appended to the existing `providers` causing the
     * duplicated providers to
     * be overridden.
     * 
     * @param {ng.Type} component
     * @param {any[]} providers
     * 
     * @return {TestComponentBuilder}
     */
    overrideViewProviders(type: ng.Type, providers: any[]): TestComponentBuilder;
    
    /**
     * @deprecated
     */
    overrideViewBindings(type: ng.Type, providers: any[]): TestComponentBuilder;
    
    /**
     * Builds and returns a RootTestComponent.
     * 
     * @return {Promise<RootTestComponent>}
     */
    createAsync(rootComponentType: ng.Type): Promise<RootTestComponent>;
    
  }

    
  /**
   * Allows injecting dependencies in `beforeEach()` and `it()`.
   * 
   * Example:
   * 
   * ```
   * beforeEach(inject([Dependency, AClass], (dep, object) => {
   *   // some code that uses `dep` and `object`
   *   // ...
   * }));
   * 
   * it('...', inject([AClass, AsyncTestCompleter], (object, async) => {
   *   object.doSomething().then(() => {
   *     expect(...);
   *     async.done();
   *   });
   * })
   * ```
   * 
   * Notes:
   * - injecting an `AsyncTestCompleter` allow completing async tests - this is the equivalent of
   *   adding a `done` parameter in Jasmine,
   * - inject is currently a function because of some Traceur limitation the syntax should eventually
   *   becomes `it('...', @Inject (object: AClass, async: AsyncTestCompleter) => { ... });`
   * 
   * @param {Array} tokens
   * @param {Function} fn
   * @return {FunctionWithParamTokens}
   */
  function inject(tokens: any[], fn: Function): FunctionWithParamTokens;
  

    
  function injectAsync(tokens: any[], fn: Function): FunctionWithParamTokens;
  

    
  var expect: (actual: any) => NgMatchers;
  

    
  interface NgMatchers extends jasmine.Matchers {
    
    toBePromise(): boolean;
    
    toBeAnInstanceOf(expected: any): boolean;
    
    toHaveText(expected: any): boolean;
    
    toHaveCssClass(expected: any): boolean;
    
    toImplement(expected: any): boolean;
    
    toContainError(expected: any): boolean;
    
    toThrowErrorWith(expectedMessage: any): boolean;
    
    not: NgMatchers;
    
  }

    
  var afterEach: Function;
  

    
  var describe: Function;
  

    
  var ddescribe: Function;
  

    
  var fdescribe: Function;
  

    
  var xdescribe: Function;
  

    
  type SyncTestFn = () => void

    
  type AsyncTestFn = (done: () => void) => void

    
  type AnyTestFn = SyncTestFn | AsyncTestFn

    
  /**
   * Allows overriding default providers of the test injector,
   * defined in test_injector.js.
   * 
   * The given function must return a list of DI providers.
   * 
   * Example:
   * 
   *   beforeEachProviders(() => [
   *     bind(Compiler).toClass(MockCompiler),
   *     bind(SomeToken).toValue(myValue),
   *   ]);
   */
  function beforeEachProviders(fn: any): void;
  

    
  function beforeEach(fn: FunctionWithParamTokens | AnyTestFn): void;
  

    
  function it(name: string, fn: FunctionWithParamTokens | AnyTestFn, timeOut?: number): void;
  

    
  function xit(name: string, fn: FunctionWithParamTokens | AnyTestFn, timeOut?: number): void;
  

    
  function iit(name: string, fn: FunctionWithParamTokens | AnyTestFn, timeOut?: number): void;
  

    
  function fit(name: string, fn: FunctionWithParamTokens | AnyTestFn, timeOut?: number): void;
  

    
  function createTestInjector(providers: Array<ng.Type | ng.Provider | any[]>): ng.Injector;
  

    
  class FunctionWithParamTokens {
    
    constructor(_tokens: any[], _fn: Function, isAsync: boolean);
    
    isAsync: boolean;
    
    /**
     * Returns the value of the executed function.
     */
    execute(injector: ng.Injector): any;
    
    hasToken(token: any): boolean;
    
  }

    
  /**
   * Wraps a function to be executed in the fakeAsync zone:
   * - microtasks are manually executed by calling `flushMicrotasks()`,
   * - timers are synchronous, `tick()` simulates the asynchronous passage of time.
   * 
   * If there are any pending timers at the end of the function, an exception will be thrown.
   * 
   * @param fn
   * @returns {Function} The function wrapped to be executed in the fakeAsync zone
   */
  function fakeAsync(fn: Function): Function;
  

    
  function clearPendingTimers(): void;
  

    
  /**
   * Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
   * 
   * The microtasks queue is drained at the very start of this function and after any timer callback
   * has been executed.
   * 
   * @param {number} millis Number of millisecond, defaults to 0
   */
  function tick(millis?: number): void;
  

    
  /**
   * Flush any pending microtasks.
   */
  function flushMicrotasks(): void;
  

  
}

declare module "angular2/testing" {
  export = ngTesting;
}


